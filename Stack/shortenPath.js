// O(n) Time | O(n) Space
function shortenPath(path) {
    const startWithSlash = path[0] === "/";
    const tokens = path.split("/").filter(token => (token.length && token !== "."));
    const trimmedPath = [];

    if (startWithSlash) trimmedPath.push("");
    
    for (const token of tokens) {
        if (token === "..") {
            if (!trimmedPath.length || trimmedPath[trimmedPath.length - 1] === "..") {
                trimmedPath.push(token);
            }
            else if (trimmedPath[trimmedPath.length - 1] !== "") {
                trimmedPath.pop();
            }
        } else {
            trimmedPath.push(token);
        }
    }

    if (trimmedPath.length === 1 && trimmedPath[0] === "") return "/";

    return trimmedPath.join("/");
}

console.log(shortenPath("/foo/../test/../test/../foo//bar/./baz"));
// Output: /foo/bar/baz
console.log(shortenPath("/../../foo/../../bar/baz"));
// Output: /bar/baz
console.log(shortenPath("../../foo/../../bar/baz"));
// Output: ../../../bar/baz
