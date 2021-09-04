files="*.png"
regex="_[0-9]+\_(.*\.png)"
for f in $files    # unquoted in order to allow the glob to expand
do
    if [[ $f =~ $regex ]]
    then
        name="${BASH_REMATCH[1]}"
        echo "$f $name"
        mv "$f" "$name"    # concatenate strings
    fi
done