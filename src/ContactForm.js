const ContactForm = ({contactList}) =>{
    contactList && console.log(contactList)
    return(
        <>
           {contactList?.map((contact, id)=>(
                <figure class="h-80 bg-white rounded-lg p-7" key={id}>
                <img 
                alt="User"
                class="pt-2 mx-auto rounded-full"
                src={contact.picture.large}/>
                <figcaption class="text-center mt-5">
                    <p class="text-gray-700 font-semibold text-xl mb-2">
                        {contact.name.last + " " + contact.name.first}
                    </p>
                    <p class="text-gray-500">
                        <span class="font-medium">Email: </span>
                        {contact.email}
                    </p>
                    <p class="text-gray-500">
                        <span class="font-medium" >Tel: </span>
                        {contact.phone}
                    </p>
                    <p class="text-gray-500">
                        <span class="font-medium">City: </span>
                        {contact.location.city}
                    </p>
                </figcaption>
                </figure>
           ))
           }
        </>
    )
}
export default ContactForm