import { Button, Form, Input, Tabs, notification } from "antd"
import { useEffect, useState } from "react"

type EmailForm = {
  subject: string
  body: string
}

export default () => {
  const clientId = '670345812107-korbdbtj1rbg8fd5rgtuhc6ad7b3vdkd.apps.googleusercontent.com'
  const [googleJwt, setGoogleJwt] = useState('')
  useEffect(() => {
    setGoogleJwt(localStorage.getItem('google-jwt') ?? '')
  }, [])

  useEffect(() => {
    if (!googleJwt) {
      google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse
      });
      google.accounts.id.renderButton(
        document.getElementById("google-signin")!,
        { theme: "outline", size: "large" }  // customization attributes
      );
    }

  }, [googleJwt])

  const handleCredentialResponse = (response: any) => {
    localStorage.setItem('google-jwt', response.credential)
    setGoogleJwt(response.credential)
  }

  if (!googleJwt) {
    return <>
      <div id="google-signin"></div>
    </>
  }

  const sendEmail = async (values: EmailForm) => {
    const response = await fetch('https://api.nase-helping-hands.org/email', {
      headers: {
        Authorization: `Bearer ${googleJwt}`
      },
      method: 'POST',
      body: JSON.stringify(values),
      mode: 'no-cors'
    })

    if (response.status !== 201) {
      notification.error({
        message: 'Uh oh!',
        description: 'Sending the email failed'
      })
    }
  }

  return <>
    <Tabs defaultActiveKey="sms">
      <Tabs.TabPane tab="Send an Email" key="email">
        <Form
          layout="vertical"
          onFinish={sendEmail}
        >
          <Form.Item label="Subject" name="subject">
            <Input placeholder="Subject" />
          </Form.Item>
          <Form.Item label="Body" name="body">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Send
            </Button>
          </Form.Item>
        </Form>
      </Tabs.TabPane>
    </Tabs>
  </>
}