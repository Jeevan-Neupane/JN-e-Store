import {
    FormButton,
    FormDiv,
    Input,
    Label,
    Message,
    MessageBox,
    TextArea,
  } from "./style";
  import React, { useRef, useState } from "react";
  import emailjs from "@emailjs/browser";
  import config from "../../config/config";
  function Form() {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [formValue, setFormValue] = useState({
      name: "",
      email: "",
      message: "",
    });
    const form = useRef();
  
    const onChange = (e) => {
      if (e.target.name === "name") {
        setFormValue({
          ...formValue,
          name: e.target.value,
        });
      }
      if (e.target.name === "email") {
        setFormValue({
          ...formValue,
          email: e.target.value,
        });
      }
      if (e.target.name === "message") {
        setFormValue({
          ...formValue,
          message: e.target.value,
        });
      }
    };
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          config.emailJsServiceId,
          config.emailJsTemplateId,
          form.current,
          config.emailJsPublicKey
        )
        .then(
          (result) => {
            setSuccess(result.text);
          
          },
          (error) => {
            setError(error.text);
          }
        );
      setFormValue({
        ...formValue,
        name: "",
        email: "",
        message: "",
      });
    };
    return (
      <FormDiv
        ref={form}
        onSubmit={sendEmail}
      >
        <Label>Name</Label>
        <Input
          type='text'
          placeholder='enter your fullname here'
          required
         
          name='name'
          value={formValue.name}
          onChange={onChange}
        />
  
        <Label>Email</Label>
        <Input
          type='email'
          placeholder='enter your email here'
          required
          name='email'
          value={formValue.email}
          onChange={onChange}
        />
  
        <Label>Message</Label>
        <TextArea
          placeholder='enter your message here'
          name='message'
          value={formValue.message}
          onChange={onChange}
        />
  
        <FormButton value='Send'>Submit</FormButton>
  
        {error && (
          <MessageBox>
            <Message color='red'>{error}</Message>
          </MessageBox>
        )}
        {success && (
          <MessageBox>
            <Message color='green'>
              Message is Sent Successfully.Thank Yor For Sending Message
            </Message>
          </MessageBox>
        )}
      </FormDiv>
    );
  }
  
  export default Form;
  