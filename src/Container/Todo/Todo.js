import React from "react";
import { Formik, Field, Form } from "formik";
import Button from "@material-ui/core/Button";
class Todo extends React.Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{
            addtask: ""
          }}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            setSubmitting(true);
            this.props.handleChange(values.addtask, Date.now());
            resetForm();
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <span style={{ fontSize: "28px", fontWeight: 500 }}> Todo</span>
              <div>
                <Field type="addtask" name="addtask" placeholder="Add task" />
              </div>
              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  loading={isSubmitting}
                >
                  Add
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
export default Todo;
