export const locations = (location) => {
    return `
    <section class="locations">
    <ul>
    <li>${location.name}</li>
    <li>${location.person}</li>
    <li>${location.temp}</li>
    <ul>
</section>
`
}