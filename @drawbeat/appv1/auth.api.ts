export type MeReseponseBody = {
  Partner: {
    id: string;
    company_id: string;
    created_at: string;
  };
};
export function me() {
  return useApi<MeReseponseBody>("/appv1/auth/me");
}

export type SendOtpRequestBody = {
  email: string;
};
export type SendOtpResponseBody = {};
export function sendOtp(body: SendOtpRequestBody) {
  return useApi<SendOtpResponseBody>("/appv1/auth/otp", {
    method: "POST",
    body,
  });
}

export type VerifyOtpRequestBody = {
  email: string;
  code: string;
};
export type VerifyOtpResponseBody = {};
export function verifyOtp(body: VerifyOtpRequestBody) {
  return useApi<VerifyOtpResponseBody>("/appv1/auth/verifyOtp", {
    method: "POST",
    body,
  });
}

export type RegisterRequestBody = {
  companyName: string;
  firstName: string;
  lastName: string;
};
export type RegisterResponseBody = {};
export function register(body: RegisterRequestBody) {
  return useApi<RegisterResponseBody>("/appv1/auth/register", {
    method: "POST",
    body,
  });
}
