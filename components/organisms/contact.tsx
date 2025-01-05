"use client";
import Container from "../atoms/container";
import Wrapper from "../atoms/wrapper";
import useGetTranslations from "@/hooks/use-get-translations";
import { openWhatsapp } from "@/helpers/openWhatsapp";
import { useForm } from "react-hook-form";
import sendEmail from "@/helpers/sendEmail";
import { useState } from "react";
import { InputForm } from "../molecules/input-form";
import Button from "../atoms/button";

export default function Contact() {
  const translations = useGetTranslations();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<TForm>();
  const [loading, setLoading] = useState(false);

  return (
    <Container className="bg-[#010207] px-5 lg:px-10" id="contact">
      <section className="max-w-[1280px] mx-auto py-20 text-yellow-50">
        <Wrapper className="w-full md:flex md:items-center md:gap-10 md:justify-between">
          <img
            className="w-[80%] h-auto mx-auto mb-5 md:hidden"
            src="contact.png"
            alt="Contact"
          />
          <Wrapper className="w-full flex items-center flex-col text-center md:text-left md:max-w-[600px]">
            <h2 className="text-4xl w-full font-semibold mb-2 md:text-7xl md:mb-5 text-yellow-500 text-shadow">
              {translations.contact.title}
            </h2>
            <p className="mb-10 font-extralight max-w-[100%] md:max-w-full md:text-xl">
              {translations.contact.description}
            </p>

            <button
              className="w-full rounded-full bg-yellow-500 hover:bg-yellow-700 py-4 px-8"
              onClick={openWhatsapp}
            >
              {translations.contact.contactButton}
            </button>
          </Wrapper>

          <img
            className="w-[50%] max-w-[500px] max-md:hidden"
            src="contact.png"
            alt="Contact"
          />
        </Wrapper>

        <Wrapper className="bg-gray-900 py-10 px-5 mt-16 lg:flex lg:gap-20 lg:items-end lg:p-20">
          <Wrapper className=" lg:w-[50%]">
            <h6 className="text-sm text-center mb-2 lg:text-left lg:text-xl lg:mb-3">
              {translations.contact.h6Label}
            </h6>
            <h3 className="text-3xl text-center mb-10 lg:text-left lg:text-5xl">
              {translations.contact.contactButton}
            </h3>
            <form
              className="flex flex-col gap-2 xl:gap-4"
              onSubmit={handleSubmit((e) => sendEmail(e, reset, setLoading))}
            >
              <InputForm
                type="text"
                placeholder={translations.contact.form.name.placeholder}
                {...register("name", { required: true })}
                invalid={errors.name !== undefined}
                errorMessage={translations.contact.form.name.messageError}
                label={translations.contact.form.name.label}
                isLoading={loading}
              />

              <InputForm
                type="email"
                placeholder={translations.contact.form.email.placeholder}
                {...register("email", { required: true })}
                invalid={errors.email !== undefined}
                errorMessage={translations.contact.form.email.messageError}
                label={translations.contact.form.email.label}
                isLoading={loading}
              />

              <InputForm
                type="tel"
                placeholder={translations.contact.form.phone.placeholder}
                {...register("phone", { required: true })}
                invalid={errors.phone !== undefined}
                errorMessage={translations.contact.form.phone.messageError}
                label={translations.contact.form.phone.label}
                isLoading={loading}
              />

              <div>
                <label className="block font-light mb-3" htmlFor="message">
                  {translations.contact.form.message.label}
                </label>
                <textarea
                  className="w-full h-[142px] py-2 pl-4 bg-transparent border-neutral-600 border resize-none disabled:opacity-50 "
                  id="message"
                  placeholder={translations.contact.form.message.placeholder}
                  {...register("message", { required: true })}
                  disabled={loading}
                />

                <p
                  className={`mt-2 text-red-500 ${
                    !errors.message && "invisible"
                  }`}
                >
                  {translations.contact.form.message.messageError}
                </p>
              </div>

              <Button
                loading={loading}
                loadingLabel={translations.contact.form.buttonLabelLoading}
                className="border-[2px] h-[60px]  border-yellow-500 rounded-full py-4 mt-5 lg:mt-10 hover:bg-yellow-500 disabled:opacity-50 disabled:bg-neutral-400 disabled:border-neutral-400 disabled:text-black"
              >
                {translations.contact.form.buttonLabel}
              </Button>
            </form>
          </Wrapper>

          <Wrapper className="mt-10 lg:w-[50%]">
            <p className="text-sm font-light leading-relaxed">
              {translations.contact.description2}
            </p>

            <Wrapper className="flex flex-col gap-5 items-left my-10">
              {translations.contact.contactInformations.map(
                ({ icon, value }, index) => (
                  <div className="flex gap-5 items-center" key={index}>
                    {icon}
                    <p>{value}</p>
                  </div>
                )
              )}
            </Wrapper>

            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.56738040644!2d-47.819927523981804!3d-21.169608278105855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bd3b0a985053%3A0x643a3b0319ff97f6!2sByMyCell!5e0!3m2!1spt-BR!2sbr!4v1730237244950!5m2!1spt-BR!2sbr"
              loading="lazy"
              className="w-[100%] h-[400px]"
            ></iframe>
          </Wrapper>
        </Wrapper>
      </section>
    </Container>
  );
}
