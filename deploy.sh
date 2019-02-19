# Deploy Script

# Build project
#echo "************************************************";
#echo "building...";
## ng build --prod --base-href "./";
#ng build --prod --base-href "https://bethgrace5.github.io/AbleAutoWebsite/";
#echo "";

# Setup repository CNAME file to point to custom domain
# echo "************************************************";
 echo $'www.ableautotech.com' > dist/CNAME;
# echo "";

# Publish project
#echo "************************************************";
#echo "publishing...";
#ngh;
#echo "done.";
