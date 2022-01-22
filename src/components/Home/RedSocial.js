const RedSocial = ({ enlace, icono }) => {
    return (
        <a  href={enlace} target="_blank" rel="noreferrer"
            class="text-decoration-none perfil-links hover:text-blue-600">
            <span class="px-2">
                <i class={icono}></i>
            </span>
        </a>
    )
}

export default RedSocial
