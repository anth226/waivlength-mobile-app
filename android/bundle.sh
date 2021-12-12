
echo
echo "Build release apk...."
echo "== CHECK repair FOLDER."
echo "== Please do : 'npm run convert-node-modules-to-androidx'"
echo "== update version in android/app/build.gradle file"
echo "== make sure the file '~/.gradle/gradle.properties' is correct"
echo "== make sure the file 'app/soundwise-release-key.keystore' is exist"
echo "== make sure if you reinstall npm packages then do 'npx jetify'"

#./gradlew assembleRelease
./gradlew bundleRelease


