import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {useForm} from "react-hook-form";

const FormHookComponentExample = ({}) => {

    // const {register, handleSubmit, errors} = useForm();
    // const onSubmit = data => console.log(data);
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues:
            {
                firstName: "Bill",
                lastName: "Gates"
            }
    });

    console.log(errors);

    return (

        <div>
            <form onSubmit={handleSubmit((data)=>{console.log(data)})}>
                <input {...register("firstName", { required: true })} placeholder="First Name"/>
                <input {...register("lastName", { required: "This is required", minLength: {value:4, message: "Min length is 4"} })} placeholder="Last Name"/>
                <input type="submit" />
            </form>
        </div>

        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <input name="firstName" defaultValue="Jane" ref={register({required: true})}/>
        //     {errors.firstName && <span>This field is required</span>}
        //     <input name="lastName" defaultValue="Doe" ref={register({required: true})}/>
        //     {errors.lastName && <span>This field is required</span>}
        //     <input type="submit"/>
        // </form>
    );
}

FormHookComponentExample.propTypes = {};

export default FormHookComponentExample;