export function imagen(id) {
    const componente = "<figure>" +
        '<img src="https://picsum.photos/id/' + id + '/200/200" alt="x">' +
        "<figcaption>John</figcaption>" +
        "</figure>";
    return componente;
}

export const picture = (id) => {
    return `
        <figure>
            <img src="https://picsum.photos/id/${id}/200/200" alt="">
            <figcaption>John</figcaption>
        </figure>
    `;
}