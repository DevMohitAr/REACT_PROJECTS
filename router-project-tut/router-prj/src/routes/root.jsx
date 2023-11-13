import { Outlet,useLoaderData,Form ,redirect,NavLink,useNavigation, useSubmit} from "react-router-dom";
import { getContacts,createContact, deleteContacts } from "../contacts";
import { useEffect } from "react";

export const Root = () => {
    const {contacts,q} = useLoaderData()
    const navigation = useNavigation()
    const submit = useSubmit()
   const searching = navigation.location &&new URLSearchParams(navigation.location.search).has("q")
   useEffect(()=>{
    document.getElementById("q").value=q
   },[q])
  return (
    <>
      <div id="sidebar" style={{color:"white"}}>
        <h1>React Router Contacts</h1>
        <div>
          <Form role="search" id='search-form"'>
            <input
              id="q"
              type="text"
              aria-label="Seacrch Contacts"
              placeholder="search"
              name="q"
              className={searching?"loading":""}
              defaultValue={q}
              onChange={(e)=>{
                const isFirstSearch = q == null;
                submit(e.currentTarget.form, {
                  replace: !isFirstSearch,
                });}
              }
            />
            <div id="search-spinner" hidden={!searching} aria-hidden />
            <div className="sr-only" aria-live="polite"></div>
          </Form>
          
        </div>
        <nav>
            {contacts.length ? (
<ul>
           {contacts.map((contact)=>{
            
            return <li key={contact.id}>
                <NavLink to={`contacts/${contact.id}`}>
                {contact.first || contact.last ? <>{contact.first} {contact.last}</>:(<i>No Name</i>)}{" "}
                    {contact.favorite && <span>*</span>}
                </NavLink>
            </li>
           })}
          </ul>
            ):(<p><i>No Contacts</i></p>)}
          
        </nav>
      </div>
      <div id="detail" className={navigation.state==='loading'?"loading":""}>

        <Outlet/>
      </div>
    </>
  );
}


export async function loader ({request}){
    const url = new URL(request.url)
    const q= url.searchParams.get('q')
    const contacts = await getContacts(q);
 
    return {contacts,q}
}

export async function action() {
  
  const contact = await createContact();
  return { contact };
}