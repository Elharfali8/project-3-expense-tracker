import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputField({type, name, value, onChange}) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor={name}>{name}</Label>
      <Input type={type} name={name} placeholder={name} value={value} onChange={onChange} />
    </div>
  )
}
