const RedSocial = ({ enlace, icono }) => {
    return (
        <a  href={enlace} target="_blank"
            class="text-decoration-none perfil-links">
            <span class="px-2">
                <i class={icono}></i>
            </span>
        </a>
    )
}

export default RedSocial
