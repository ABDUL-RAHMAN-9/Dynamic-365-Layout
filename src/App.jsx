import { useState } from "react";
import
{
  Stack,
  TextField,
  Checkbox,
  Label,
  DefaultButton,
  PrimaryButton,
  MessageBar,
  MessageBarType,
  Icon,
} from "@fluentui/react";
import { RadioGroup, Radio } from "@fluentui/react-components";
import DynamicLogo from "./assets/Dynamic_Logo.png";

const initialState = {
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  website: "",
  mainPhone: "",
  crmUrl: "",
  organization: "",
  from: "",
  to: "",
};

export default function App({ onSubmitSuccess = console.log })
{
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [checkbox, setCheckbox] = useState(false);
  const [interval, setInterval] = useState("");

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = () =>
  {
    let err = {};
    Object.entries(form).forEach(([key, value]) =>
    {
      if (!value.trim() && key !== "email") err[key] = true;
    });
    if (!isValidEmail(form.email)) err.email = true;
    if (!interval) err.interval = true;
    return err;
  };

  const handleChange = (e, val) =>
  {
    const name = e.target.name;
    const value = val !== undefined ? val : e.target.value;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const handleActivate = (e) =>
  {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0)
    {
      const data = {
        ...form,
        interval,
        checkbox,
        submittedAt: new Date().toISOString(),
      };
      onSubmitSuccess(data);
      setForm(initialState);
      setCheckbox(false);
      setInterval("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <Stack
        tokens={{ childrenGap: 20 }}
        styles={{
          root: {
            maxWidth: 1000,
            margin: "auto",
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
          },
        }}
      >
        {/* Header */}
        <Stack horizontal horizontalAlign="space-between" verticalAlign="center" wrap tokens={{ childrenGap: 10 }}>
          <img src={DynamicLogo} alt="DynamicLogo.png" style={{ height: 100 }} />
          <Stack horizontal tokens={{ childrenGap: 10 }}>
            <PrimaryButton
              text="ACTIVATE"
              onClick={handleActivate}
              styles={{
                root: {
                  backgroundColor: "#28a745",
                  borderColor: "#28a745",
                  color: "white",
                },
                rootHovered: {
                  backgroundColor: "#218838",
                  borderColor: "#1e7e34",
                },
                rootPressed: {
                  backgroundColor: "#1e7e34",
                  borderColor: "#1c7430",
                },
              }}
            />
            <DefaultButton text="SEND REQUEST" />
          </Stack>
        </Stack>

        {/* License Registration */}
        <div className="section-box">
          <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 6 }}>
            <Icon iconName="Permissions" styles={{ root: { fontSize: 16, color: "#1e3a8a" } }} />
            <Label styles={{ root: { fontSize: 18, fontWeight: "bold", color: "#1e3a8a", marginBottom: 10 } }}>
              License Registration
            </Label>
          </Stack>
          <Stack horizontal tokens={{ childrenGap: 24 }} wrap>
            <Stack tokens={{ childrenGap: 20 }} styles={{ root: { flex: 1, minWidth: "250px" } }}>
              <TextField name="firstName" label="First Name" required value={form.firstName} onChange={handleChange} errorMessage={errors.firstName && "Required"} />
              <TextField name="companyName" label="Company Name" required value={form.companyName} onChange={handleChange} errorMessage={errors.companyName && "Required"} />
              <TextField name="website" label="Website" required value={form.website} onChange={handleChange} errorMessage={errors.website && "Required"} />
            </Stack>
            <Stack tokens={{ childrenGap: 20 }} styles={{ root: { flex: 1, minWidth: "250px" } }}>
              <TextField name="lastName" label="Last Name" required value={form.lastName} onChange={handleChange} errorMessage={errors.lastName && "Required"} />
              <TextField name="email" label="Email" required value={form.email} onChange={handleChange} errorMessage={errors.email && "Required"} />
              <TextField name="mainPhone" label="Main Phone" required value={form.mainPhone} onChange={handleChange} errorMessage={errors.mainPhone && "Required"} />
            </Stack>
          </Stack>
        </div>

        {/* CRM Details - now placed after License Registration */}
        <div className="section-box">
          <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 6 }}>
            <Icon iconName="Database" styles={{ root: { fontSize: 16, color: "#1e3a8a" } }} />
            <Label styles={{ root: { fontSize: 18, fontWeight: "bold", color: "#1e3a8a", marginBottom: 10 } }}>
              CRM Details
            </Label>
          </Stack>
          <Stack horizontal tokens={{ childrenGap: 24 }} wrap>
            <Stack tokens={{ childrenGap: 20 }} styles={{ root: { flex: 1, minWidth: "250px" } }}>
              <TextField name="crmUrl" label="CRM URL" required value={form.crmUrl} onChange={handleChange} errorMessage={errors.crmUrl && "Required"} />
              <TextField label="CRM Version" value="9.2" readOnly />
            </Stack>
            <Stack tokens={{ childrenGap: 20 }} styles={{ root: { flex: 1, minWidth: "250px" } }}>
              <TextField name="organization" label="Organization" required value={form.organization} onChange={handleChange} errorMessage={errors.organization && "Required"} />
              <TextField label="User License" value="2" readOnly />
            </Stack>
          </Stack>
        </div>

        {/* Notification Section */}
        <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 6 }}>
          <Icon iconName="Ringer" styles={{ root: { fontSize: 16, color: "#1e3a8a" } }} />
          <Label styles={{ root: { fontWeight: "bold", fontSize: 16, color: "#1e3a8a" } }}>Notification</Label>
        </Stack>
        <span style={{ fontSize: 14, color: "#555" }}>
          Notify User and Inagic about issues regarding licensing.
        </span>

        <Stack horizontal wrap tokens={{ childrenGap: 20 }}>
          <TextField
            name="from"
            label="From"
            required
            value={form.from}
            onChange={handleChange}
            errorMessage={errors.from && "Required"}
            styles={{ root: { flex: 1, minWidth: "200px" } }}
          />
          <TextField
            name="to"
            label="To"
            required
            value={form.to}
            onChange={handleChange}
            errorMessage={errors.to && "Required"}
            styles={{ root: { flex: 1, minWidth: "200px" } }}
          />
        </Stack>

        <Checkbox
          label="Notify To Inagic"
          checked={checkbox}
          onChange={(e, checked) => setCheckbox(checked)}
          styles={{
            checkbox: { borderColor: "#1e3a8a" },
            checkmark: { backgroundColor: "#28a745", borderColor: "#28a745", color: "white" },
            text: { color: "#1e3a8a", fontWeight: "bold" },
          }}
        />

        <Stack>
          <Label required styles={{ root: { fontSize: 16, fontWeight: "bold", color: "#1e3a8a", marginBottom: 8 } }}>
            Notification Interval
          </Label>
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {["day", "week", "month"].map((val) => (
              <Radio
                key={val}
                value={val}
                label={`Once a ${val}`}
                styles={{
                  root: {
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  },
                  radio: {
                    border: "1px solid black", // circle border
                    boxSizing: "border-box",
                  },
                  radioChecked: {
                    backgroundColor: "#1e3a8a",
                    borderColor: "#1e3a8a",
                  },
                  label: {
                    color: "#1e3a8a",
                    fontWeight: "bold",
                    marginLeft: 6,
                  },
                }}
              />
            ))}
          </div>

          {errors.interval && (
            <MessageBar messageBarType={MessageBarType.error} styles={{ root: { marginTop: 8 } }}>
              Please select an interval.
            </MessageBar>
          )}
        </Stack>


        <a href="#" style={{ fontWeight: "bold", color: "#1e3a8a", fontSize: 16 }}>
          License Registration using (*.lic) file
        </a>
      </Stack>

      {/* Responsive Styles */}
      <style>
        {`
          .section-box {
            margin-bottom: 24px;
          }

          @media (max-width: 768px) {
            .section-box {
              padding: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
