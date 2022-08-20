import React from 'react'
import { Formik, Field, Form } from "formik";

const FormOn = () => {
  var data=[]
  return (
    <div className="App">
      <h1>Contact Us</h1>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          data.push(JSON.stringify(values, null, 2))
          axios.post('https:sample-endpoint.com/user', {
            Name: 'Fred',
            Age: '23'
          })
          .then(function (response) {
            console.log(response);
          })
          console.log(typeof(data[0]),data)
        }}
      >
        <Form>
          <div className="grid4">
          <h1>Personal Details</h1>
            <div className="grid3">
            <div className="grid2">
            <label className="imp">Name</label>
            <Field name="name" type="text" placeholder="Enter Name"/>
            </div>
            <div className="grid2">
            <label className="imp">Date of Birth or Age</label>
            <Field name="dob" type="text" placeholder="DD/MM/YY or Age in Years"/>
            </div>
            <div className="grid2">
            <label className="imp">Sex</label>
            <Field as="select" name="Sex">
            <option value="0" selected>Select Sex</option>
             <option value="Male">Male</option>
             <option value="Female">Female</option>
             <option value="Other">Other</option>
           </Field>
            </div>
            <div className="grid2">
            <label className="imp">Mobile</label>
            <Field name="Mobile" type="text" placeholder="Enter Mobile" />
            </div>
            <div className="grid2">
            <label className="imp">Govt Issued ID</label>
            <Field as="select" name="ID">
            <option value="0" selected>ID Type</option>
             <option value="Male">Pan Card</option>
             <option value="Female">AADHAR CARD</option>
             <option value="Other">Other</option>
           </Field>
            
            </div>
            <Field name="GovId" type="text" placeholder="Enter Government ID" />
            </div>
            <h1>Contact Details</h1>
            <div className="grid3">
            <div className="g3">
            <label className="imp">Guardian Details</label>
            <Field as="select" name="Guardian">
            <option value="0" selected>Enter Label</option>
             <option value="Male">Parent</option>
             <option value="Female">Relative</option>
             <option value="Other">Other</option>
           </Field>
           <Field name="Gname" type="text" placeholder="Enter Guardian Name" />
            </div>
            
            
            
            <div className="grid2">
            <label className="imp">Email</label>
            <Field name="email" type="email" placeholder="Enter Email" />
            </div>
            <div className="grid2">
            <label className="imp">Emergency Contact <br></br>Number</label>
            <Field name="Emergency" type="phone" placeholder="Enter Emergency No."/>
            </div>
          
            </div>
            <h1>Address Details</h1>
            
            <div className="grid3">
            <div className="grid2">
            <label className="imp">Address</label>
            <Field name="Address" type="text" placeholder="Enter Address"/>
            </div>
            <div className="grid2">
            <label className="imp">State</label>
            <Field name="State" type="text" placeholder="Enter State"/>
            </div>
            <div className="grid2">
            <label className="imp">City</label>
            <Field as="select" name="City">
            <option value="0" selected>Enter City/town/village</option>
             <option value="Male">Varanasi</option>
             <option value="Female">Jaunpur</option>
             <option value="Other">Lucknow</option>
           </Field>
            </div>
            <div className="grid2">
            <label className="imp">Country</label>
            
            <Field name="Country" type="search" value="India"/>
            
            </div>
            <div className="grid2">
            <label className="imp">Pincode</label>
            <Field name="Pincode" type="text" placeholder="Enter Pincode"/>
            </div>
          
            </div>
            <h1>Other Details</h1>
            
            <div className="grid3">
            <div className="grid2">
            <label className="imp">Occupation</label>
            <Field name="Occupation" type="text" placeholder="Enter Occupation"/>
            </div>
            <div className="grid2">
            <label className="imp">Religion</label>
            <Field as="select" name="Religion">
            <option value="0" selected>Enter Religion</option>
             <option value="married">Hindu</option>
             <option value="unmarried">Other</option>
             
           </Field>
            </div>
            <div className="grid2">
            <label className="imp">Marital Status</label>
            <Field as="select" name="Marital">
            <option value="0" selected>Enter Marital Status</option>
             <option value="married">married</option>
             <option value="unmarried">unmarried</option>
             
           </Field>
            </div>
            <div className="grid2">
            <label className="imp">Blood Group</label>
            <Field as="select" name="blood">
            <option value="0" selected>Group</option>
             <option value="A+">A+</option>
             <option value="A-">A-</option>
             <option value="B+">B+</option>
             <option value="B-">B-</option>
             <option value="O+">O+</option>
             <option value="O-">O-</option>
             <option value="AB+">AB+</option>
             <option value="AB-">AB-</option>
             
           </Field>
            </div>
            <div className="grid2">
            <label className="imp">Nationality</label>
            <Field name="Nationality" type="search" value="India"/>
            </div>
          
            </div>
            <div className="grid">
            <button type="reset">CANCEL</button>
              <button type="submit">Submit</button></div>
          </div>
          
          
        </Form>
      </Formik>
    </div>
  )
}

export default FormOn