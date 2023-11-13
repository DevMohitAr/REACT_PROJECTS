import { Form, useLoaderData,redirect } from "react-router-dom";
import { updateContact } from "../contacts";
import { useNavigate } from "react-router-dom";

export default function EditContact() {
  const  {contact}  = useLoaderData();
  const navigate = useNavigate()
 
  return (
    <Form
      method="post"
      id="contact-form"
      style={{ color: "#ffd541", fontSize: "1.25rem",outline:"2px solid",outlineOffset:"15px",outlineColor:"#017777",borderRadius:"4px" }}
    >
      <p >
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact.last}
         
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@your handle"
          defaultValue={contact.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea name="notes" defaultValue={contact.notes} rows={6} />
      </label>
      <p>
        <button type="submit" style={{color:"#ffd541",backgroundColor:"#017777"}}>Save</button>
        <button
          type="button"
          style={{
            color: "red",
            backgroundColor: "#042323",
            border: "1px solid #017777",
            
          }}
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
}
export async function action ({request,params}){
    const formData = await request.formData();
    const updates = Object.fromEntries(formData)
    await updateContact(params.contactId,updates)
    return redirect(`/contacts/${params.contactId}`)
}