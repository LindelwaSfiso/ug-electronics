export default function UgMapLocation() {
    return (
        <div className="relative w-full h-96">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d446.98798371525703!2d31.14829836762757!3d-26.329612115809553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1727602179713!5m2!1sen!2s"
                loading="lazy" frameBorder="0" allowFullScreen=""
                aria-hidden="false" tabIndex="0"
                className="absolute top-0 left-0 w-full h-full"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}