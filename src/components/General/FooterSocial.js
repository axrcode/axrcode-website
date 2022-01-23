const FooterSocial = ({ icon, red, user }) => {
    return (
        <div className="md:w-1/2 px-3 pb-3">
            <a  href={`https://${ red }/${ user }`} target="_blank" rel="noreferrer">
                <div className="bg-gray-900 hover:bg-gray-800 rounded-md py-2">
                    <div className="flex items-center justify-center">
                        <div className="w-1/6 text-center text-2xl">
                            <i class={icon}></i>
                        </div>
                        <div className="w-4/6">
                            <span className="font-bold text-blue-600">
                                { red }/
                            </span>
                            { user }
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default FooterSocial
