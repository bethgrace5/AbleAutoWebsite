# Deploy Script

# Build project
echo "************************************************";
echo "building...";
ng build --prod --base-href "./";
echo "";

# Setup repository CNAME file to point to custom domain
echo "************************************************";
echo $'ableautotech.com' > dist/CNAME;
echo "";

# Publish project
echo "************************************************";
echo "publishing...";
ngh;
echo "done.";
