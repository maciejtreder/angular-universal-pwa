cd schematics

CATALOGS=(_utils universal serverless init)

exitStatus=0

for i in "${CATALOGS[@]}"
do :
   cd $i
   npm install
   if npm test
   then
    echo $i passed
   else
    exitStatus=1
   fi
   cd ..
   sleep 1
done

exit $exitStatus
