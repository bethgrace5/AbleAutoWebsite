# Build project
echo "************************************************";
echo "building...";
ng build --prod --base-href "http://www.ableautotech.com";
echo "";

# Setup CNAME to point to custom domain
echo "************************************************";
echo "www.ableautotech.com" > dist/CNAME;
echo "www.ableautotech.com" > CNAME;
echo "";

# Publish project
echo "************************************************";
echo "publishing...";
ngh;
echo "done.";
