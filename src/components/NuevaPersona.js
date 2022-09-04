import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import 'antd/dist/antd.css'

import { useDispatch, useSelector } from "react-redux";
//actions
import { crearNuevaPersonaAction,} from "../actions/personaAction";
import { useParams } from "react-router-dom";

const NuevaPersona = () => {
const { id } = useParams();
  //state del componente
  const [form] = Form.useForm();
  // usamos useDispatch
  const dispatch = useDispatch();

  
  

  //mandar a llamar el action de personaAction
  const agregarPersona = (persona) =>
    dispatch(crearNuevaPersonaAction(persona));

  //submit
  const submitPersona = (data) => {
    agregarPersona({
      ...data
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body" >
            <h2 className="text-center mb-4 font-weight-bold">
            {id ? "Editar Persona" : "Nueva Persona"}
            
            </h2>
            <Form
              onFinish={submitPersona}
              form={form}
              labelCol={{ span: 8 }}
              layout='vertical'

            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="gender"
                rules={[{ required: true, message: "gender is required" }]}
                label='Gender'
              >
                <Select >
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="status"
                rules={[{ required: true, message: "status is required" }]}
                label='Status'
              >
                <Select>
                  <Select.Option value="active">Active</Select.Option>
                  <Select.Option value="inactive">Inactive</Select.Option>
                </Select>
              </Form.Item>
              

              <Button type="primary" onClick={form.submit}>
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
