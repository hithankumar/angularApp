

FILEPATH='/Users/hnandaku/.jenkins/workspace/first-ci/'
EXPECTED_CODE_COVERAGE_PER_FILE=80

#gets total code coverage report 
function getCodeCoverage(){
	cd ${FILEPATH}"coverage"
	result=$(node -pe 'JSON.parse(process.argv[1])[process.argv[2]].statements.pct' "$(cat coverage-summary.json)" "total")
	echo ${result}
}
filesChangedInCurrentCommit=`git diff --name-only $GIT_PREVIOUS_COMMIT $GIT_COMMIT `

#if ts files have not been changed then don't proceed
if [[ -z "$filesChangedInCurrentCommit" ]]; then
echo 'No typescript files have been changed in this commit.'

else
files=`git diff --name-only $GIT_PREVIOUS_COMMIT $GIT_COMMIT |grep "\.ts$"`
lastCodeCoverage=$(getCodeCoverage)
npm install
npm run test
cd "/Users/hnandaku/.jenkins/workspace/first-ci/coverage"

for file in $files; do
 	latestComittedFile=${FILEPATH}${file}
 	coveragePerFile=$(node -pe 'JSON.parse(process.argv[1])[process.argv[2]].statements.pct' "$(cat coverage-summary.json)" "${latestComittedFile}")
 	if (($(bc <<< "$coveragePerFile >= $EXPECTED_CODE_COVERAGE_PER_FILE")));
 	then
 		echo 'Code coverage for ' ${latestComittedFile} ' is ' ${coveragePerFile}
 	else
 		echo 'Code coverage for ' ${latestComittedFile} ' is less than' ${EXPECTED_CODE_COVERAGE_PER_FILE} '. ABORTING BUILD.';
    	exit 1;
        fi;
done

currentCodeCoverage=$(getCodeCoverage)
if (( $(bc <<< "$currentCodeCoverage >= $lastCodeCoverage") ));
then 
	echo 'Current Coverage report greater than last coverage report. Generating build.';
	npm run build
	#move contents from Jenkins build to local folder
	rm -r /Users/hnandaku/product/
	cp -a "/Users/hnandaku/.jenkins/workspace/first-ci/dist/my-app/" "/Users/hnandaku/product/"


else
	echo 'Current Coverage report is less than last coverage report. ABORTING BUILD.';
exit 1;
fi

fi

