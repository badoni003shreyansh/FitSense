import React from "react";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { Loader } from "lucide-react";
import FormDropDown from "./FormDropDown";
import {
  fitnessLevelOptions,
  genderOptions,
  trainingTypeOptions,
} from "../dropDownOpts";

function FormWrapper({ onSubmit, loading }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <div className="flex flex-col w-full max-w-5xl max-h-3xl card justify-center items-start rounded-2xl shadow-lg gap-4">
      <form
        className="flex flex-col w-full p-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-row w-full justify-between">
          <FormDropDown
            options={trainingTypeOptions}
            label="What type of training do you do?"
            register={register}
            name="trainingType"
            errors={errors}
          />
          <FormInput
            label="Number of days you train per week"
            type="text"
            register={register}
            name="trainingDays"
            pattern={{
              value: /^[1-7]$/,
              message: "Please enter a number between 1 and 7",
            }}
            errors={errors}
            placeholder="e.g., 3, 5, 7"
            maxLength={{ value: 1, message: "Max 1 character allowed" }}
          />
        </div>

        <FormInput
          label="What is your goal?"
          type="text"
          register={register}
          name="goal"
          pattern={{
            value: /^[A-Za-z\s]+$/,
            message: "Please enter a valid goal (letters only)",
          }}
          maxLength={{ value: 100, message: "Max 20 characters allowed" }}
          minLength={{ value: 3, message: "At least 3 characters" }}
          errors={errors}
          placeholder="e.g., Lose weight, Gain muscle, Improve endurance"
        />
        <div className="flex flex-row w-full justify-between">
          <FormDropDown
            options={fitnessLevelOptions}
            label="What is your fitness level?"
            register={register}
            name="fitnessLevel"
            errors={errors}
          />
          <FormDropDown
            options={genderOptions}
            label="Gender"
            register={register}
            name="gender"
            errors={errors}
          />
        </div>
        <button
          className="btn-primary rounded-3xl px-4 mx-auto my-4 min-w-32 place-items-center justify-center"
          type="submit"
          disabled={isSubmitting}
        >
          {loading ? (
            <Loader color="#fff" className="animate-spin" />
          ) : (
            "Make My Plan!!"
          )}
        </button>
      </form>
    </div>
  );
}

export default FormWrapper;
