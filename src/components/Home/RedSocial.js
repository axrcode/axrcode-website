const RedSocial = ({ enlace, icono }) => {
    return (
        <a  href={enlace} target="_blank" rel="noreferrer"
            className="text-decoration-none perfil-links hover:text-blue-600">
            <span className="px-2">
                <i className={icono}></i>
            </span>
        </a>
    )
}

export default RedSocial
