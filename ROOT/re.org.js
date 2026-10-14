git checkout -b slave
// slave arbeitet in task/ solve/ hiway/live/
git add .
git commit -m "slave: Aufgabe Lösung live 3er Bezug zu 9"
git checkout master
git merge slave
git tag safe -m "SAVE SAFE: Lava+CO2 Sicherung"
git push --tags
