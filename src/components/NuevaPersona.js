import { Button, Form, Input, Select } from "antd";
import {
  crearNuevaPersonaAction,
  editarPersonaAction,
  obtenerPersonaEditar,
} from "../actions/personaAction";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { useParams } from "react-router-dom";

const NuevaPersona = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const persona = useSelector((state) => state?.personas?.persona);

  const agregarPersona = (persona) =>
    dispatch(crearNuevaPersonaAction(persona));

  const submitPersona = (data) => {
    if (id) {
      dispatch(editarPersonaAction(id, data));
    } else {
      agregarPersona({ ...data });
    }
  };

  useEffect(() => {
    if (id) {
      const prueba = () => dispatch(obtenerPersonaEditar(id));
      prueba();
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (persona && id) {
      form.setFieldsValue({
        name: persona.name,
        email: persona.email,
        gender: persona.gender,
        status: persona.status,
      });
    }
  }, [form, id, persona]);

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              {id ? "Editar Persona" : "Nueva Persona"}
            </h2>
            <Form
              onFinish={submitPersona}
              form={form}
              labelCol={{ span: 8 }}
              layout='vertical'
            >
              <Form.Item
                label='Name'
                name='name'
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label='Email'
                name='email'
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name='gender'
                rules={[{ required: true, message: "gender is required" }]}
                label='Gender'
              >
                <Select>
                  <Select.Option value='male'>Male</Select.Option>
                  <Select.Option value='female'>Female</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name='status'
                rules={[{ required: true, message: "status is required" }]}
                label='Status'
              >
                <Select>
                  <Select.Option value='active'>Active</Select.Option>
                  <Select.Option value='inactive'>Inactive</Select.Option>
                </Select>
              </Form.Item>
              <Button type='primary' onClick={form.submit}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevaPersona;
