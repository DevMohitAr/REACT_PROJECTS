import React from "react";
const reducer = (state, action) => {
    if(action.type==="input"){
        return {
            ...state,[action.name]:action.value
        }
    }else if(action.type==="submit"){
        return {...state,submitting:true,error:null,success:false}
    }else if(action.type==="success"){
        return {...state,submitting:false,error:null,name:"",email:"",marketing:true,success:true}
    }else if(action.type==="error"){
        return {...state,submitting:false,success:false,error:action.error}
    }else{
        throw new Error("this action type isnts supported")
    }
};

export default function Form() {
  const [state, dispatch] = React.useReducer(reducer, {
  name: "",
  email: "",
  marketing: true,
  submitting: false,
  error: null,
  success: false,
});
  const { name, email, marketing, submitting, error, success } = state;
  return (
    <div>
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        dispatch({ type: "submit" });
        try {
          await subscribe({
            name,
            email,
            marketing,
          });
          dispatch({ type: "success" });
        } catch (error) {
          dispatch({ type: "error", msg: error.message });
        }
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="text"
        id="name"
        onChange={(e) => {
          dispatch({ type: "input", name: "name", value: e.target.value });
        }}
        value={name}
        required
        placeholder="your name"
      />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" onChange={(e)=>{
        dispatch({type:"input",name:"email",value:e.target.value})
      }} value={email} required placeholder="your email"/>
      <button type="submit">submit</button>
     </form>
      <label htmlFor="marketing">Marketing</label>
      <input
        type="checkbox"
        name="marketing"
        id="marketing"
        checked={marketing}
        onChange={(e)=>{
            dispatch({
                type:"input",
                name:"marketing",
                value:e.target.checkbox
            })
        }}
      />
      <p>i agree to everything</p>
   </div>
  );
}
function subscribe({ email, name, marketing }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}
