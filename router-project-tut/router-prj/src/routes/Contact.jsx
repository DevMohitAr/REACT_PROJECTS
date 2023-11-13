import { Form, useLoaderData ,useFetcher,Link } from "react-router-dom";
import { getContact, updateContact } from "../contacts";



export default function Contact() {
  const {contact} = useLoaderData()

  return (
    <div
      id="contact"
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderColor: "#017777",
      }}
    >
      <div>
        <img key={contact.avatar} src={contact.avatar || null} />
      </div>

      <div style={{ justifySelf: "start", flex: 1 }}>
        <h1 style={{ color: "#fff", marginBottom: "16px" }}>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          
            {" "}
            <Favorite contact={contact} />
          
        </h1>

        {contact.twitter && (
          <p>
            <Link
              style={{ color: "#cdd3d3" }}
              to={`https://twitter.com/${contact.twitter}`}
            >
              @{contact.twitter}
            </Link>
          </p>
        )}

        {contact.notes && <p style={{color:"#fff"}}>{contact.notes}</p>}

        <div
          style={{
            marginTop: "36px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Form action="edit">
            <button
              style={{
                padding: "1rem 3rem",
                fontSize: "24px",
                color: "#fff",
                background: "none",
                border: "2px solid #017777",
              }}
              type="submit"
            >
              Edit
            </button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button
              style={{
                padding: "1rem 2rem",
                fontSize: "24px",
                color: "red",
                background: "none",
                border: "2px solid #017777",
              }}
              type="submit"
            >
              Delete
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  const fetcher = useFetcher()
  
  let favorite = contact.favorite;
    if (fetcher.formData) {
      favorite = fetcher.formData.get("favorite") === "true";
    }
  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
        style={{backgroundColor:"#017777"}}
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}
export async function loader({ params }) {
  const contact = await getContact(params.contactId);

  return { contact };
}

export async function action({ request, params }) {
  let formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}
