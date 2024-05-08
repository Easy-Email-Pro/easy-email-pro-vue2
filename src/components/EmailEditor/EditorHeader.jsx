import { Button, PageHeader, Space, Typography } from "@arco-design/web-react";
import { IconMenu } from "@arco-design/web-react/icon";
import React from "react";
import { useEditorContext } from "easy-email-pro-theme";

export function EditorHeader (props) {
  const [collapsed, setCollapsed] = React.useState(true);
  const { values, submit, setFieldValue } = useEditorContext();

  const onChange = (text) => {
    setFieldValue(null, "subject", text);
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <PageHeader
          backIcon={<IconMenu />}
          onBack={() => setCollapsed(!collapsed)}
          className="editor-header"
          style={{
            backgroundColor: "rgb(var(--primary-6))",
            color: "#fff !important",
          }}
          subTitle={
            <div
              style={{
                height: 40,
                position: "absolute",
                minWidth: 300,
                top: 18,
              }}
            >
              <Typography.Title
                heading={5}
                style={{
                  margin: 0,
                  color: "var(--color-white)",
                }}
                editable={{
                  onChange: onChange,
                }}
              >
                {values.subject}
              </Typography.Title>
            </div>
          }
          extra={
            <div style={{ marginRight: 50 }}>
              <Space>
                {props?.extra}

                <Button onClick={() => submit()}>
                  <strong>Save</strong>
                </Button>
                <div />
              </Space>
            </div>
          }
        />
      </div>

      <style>{`
      .editor-header .arco-page-header-back { color: var(--color-white); }
      .editor-header .arco-page-header-back:hover:before { background-color: transparent !important; }
      .editor-header .arco-typography-operation-edit { color: var(--color-white); }
      .editor-header .arco-typography-operation-edit { color: var(--color-white);background-color: transparent; }
      `}</style>

    </div>
  );
};
