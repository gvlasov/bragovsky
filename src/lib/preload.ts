export default function preload(srcs: string[] | string) {
    if (!(srcs instanceof Array)) {
        srcs = [srcs]
    }
    return srcs.map(
        (src: string) =>
            new Promise(
                function (resolve) {
                    let img = new Image()
                    img.onload = resolve
                    img.src = src
                }
            )
    );
}
