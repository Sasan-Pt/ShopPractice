import {useFormik} from "formik";

const validate = values => {

  const errors = {};

  if (!values.firstName) {

    errors.firstName = 'Required';

  } else if (values.firstName.length > 15) {

    errors.firstName = 'Must be 15 characters or less';

  }



  if (!values.lastName) {

    errors.lastName = 'Required';

  } else if (values.lastName.length > 20) {

    errors.lastName = 'Must be 20 characters or less';

  }



  if (!values.email) {

    errors.email = 'Required';

  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {

    errors.email = 'Invalid email address';

  }



  return errors;

};

const Contacts = () => {
  const formik=useFormik({
    initialValues:{
      firstName:"",
      lastName:"",
      email:"",
      description:"",
    },
    validate,
    onSubmit:async values => {
      await console.log(values)
    }
  })
  return (
    <>
      <div className="mr-10 text-right">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum congue augue,
          eget mattis libero scelerisque at. Nullam ullamcorper elementum egestas.
          Duis dictum vehicula nulla, id finibus risus. Donec id bibendum elit.
          Donec lobortis venenatis massa, quis ullamcorper justo tempus non. Aliquam ut vestibulum felis. Maecenas condimentum mi massa, vestibulum pellentesque turpis sodales ac.
          Morbi bibendum ullamcorper porttitor.
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fermentum congue augue,
          </div>
          <div>ایمیل:</div>
          <div>تلفن:</div>
          <div>واتساپ:</div>
          <div>یا می تونید با پر کردن فرم زیر با ما در ارتباط باشید</div>
        </div>
      </div>
      <form className="flex justify-center justify-items-center " onSubmit={formik.handleSubmit}>
        <div className="flex-col">
          <div className="w-32 ">
            <label>Name:</label>
            <input placeholder={"fuck u"} id={"firstName"} type={"firstName"} {...formik.getFieldProps('firstName')}/>
            {formik.touched.firstName && formik.errors.firstName ? (

                <div>{formik.errors.firstName}</div>

            ) : null}

            <label>last name:</label>
            <input placeholder={"fuck u"} id={"lastName"} type={"lastName"} {...formik.getFieldProps('lastName')}/>
            {formik.touched.lastName && formik.errors.lastName ? (

                <div>{formik.errors.lastName}</div>

            ) : null}

            <label htmlFor="email">Email:</label>
            <input placeholder={"fuck u"} id={"email"} type={"email"}  {...formik.getFieldProps('email')}/>
            {formik.touched.email && formik.errors.email ? (

                <div>{formik.errors.email}</div>

            ) : null}


            <label>description:</label>
            <textarea id={"description"} {...formik.getFieldProps('description')}/>
          </div>
          <div className="space-x-12">
            <button type={"submit"}>something</button>
          </div>
        </div>
      </form>
    </>
  );
};
export default Contacts;
