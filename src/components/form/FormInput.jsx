import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Controller } from "react-hook-form";

const FormInput = ({
  name,
  control,
  label,
  type = "text",
  placeholder = "",
  disabled = false,
  className = "",
  rules = {},
  error = null,
}) => {
  return (
    <div className="grid w-full items-center gap-1.5">
      {label && <Label htmlFor={name}>{label}</Label>}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <Input
              {...field}
              id={name}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              className={cn(
                className,
                (error || fieldState.invalid) && "border-destructive"
              )}
            />
            {(error || fieldState.error) && (
              <p className="font-medium orange-text-color absolute mt-14 text-xs ms-4 3xl:mt-16">
                {error || fieldState.error?.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
};

export default FormInput;
