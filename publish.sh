export DEST=../danielearwicker.github.io/resources/immuto/
rm -rf $DEST
mkdir -p $DEST/built
cp index.html $DEST
cp style.css $DEST
cp built/bundle.js $DEST/built
