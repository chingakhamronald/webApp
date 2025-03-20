import { FC, memo, useCallback, useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldValues, Path } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Eye, EyeOff } from "lucide-react";

interface ICustomFormField<T extends FieldValues> {
  formControl: Control<T>;
  label: string;
  type?: string;
  name: Path<T>;
  placeholder?: string;
  options?: any;
  disable?: boolean;
  onChange?: any;
}

export const CustomFormField: FC<ICustomFormField<any>> = memo(
  ({
    formControl,
    label,
    name,
    type = "string",
    placeholder,
    disable = false,
    onChange,
    options,
  }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClick = useCallback(() => {
      setShowPassword((prev) => !prev);
    }, [setShowPassword]);

    return (
      <FormField
        control={formControl}
        name={name}
        render={({ field }) => (
          <FormItem className="py-2 w-full">
            <FormLabel>{label}</FormLabel>
            {type === "select" ? (
              <Select
                onValueChange={(e) => {
                  field.onChange(e);
                  onChange?.(e);
                }}
                disabled={disable}
              >
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    {options?.map((option: any, idx: number) => (
                      <SelectItem value={option.value} key={idx}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            ) : (
              <div className="relative">
                <FormControl>
                  <Input
                    placeholder={placeholder}
                    {...field}
                    type={
                      type === "password" && !showPassword ? "password" : "text"
                    }
                  />
                </FormControl>
                {type === "password" && (
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={handleClick}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                )}
              </div>
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    );
  }
);
