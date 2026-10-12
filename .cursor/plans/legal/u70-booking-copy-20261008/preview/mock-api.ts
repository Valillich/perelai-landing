import fixture from './fixture.json';
const params=new URLSearchParams(location.search);
const state=params.get('state') || 'initial';
export async function getPublicBookingInfo(){
 const data=structuredClone(fixture);
 if(state==='updated') {data.personalClient={id:'client-u70-preview',name:'Demo Client',email:'client@example.com'};data.legal.perelaiAcceptance={state:'acceptanceRequired',termsUpdated:true};}
 if(state==='accepted') {data.personalClient={id:'client-u70-preview',name:'Demo Client',email:'client@example.com'};data.legal.perelaiAcceptance={state:'alreadyAccepted',termsVersion:data.legal.perelai.bookingTermsVersion,acceptedAt:'2026-10-08T09:00:00.000Z'};}
 if(state==='unavailable'){data.legal.intakeAvailable=false;data.legal.intakeUnavailableReason='BUSINESS_SETUP';}
 if(state==='custom'){data.legal.bookingLegalPath='CUSTOM';data.legal.businessAgreement='REQUIRED';data.legal.generatedPrivacyNotice=null;data.legal.privacyNoticeUrl='https://example.com/privacy';data.legal.bookingTermsUrl='https://example.com/terms';data.legal.customTermsText='Preview only: business booking terms.';data.legal.refundPolicy.url='https://example.com/refunds';}
 return data;
}
export async function getPublicAvailability(slug,p){return {date:p.date,serviceId:p.serviceId,serviceDuration:60,staffId:null,slots:[{time:'18:00',available:true,staffIds:[]},{time:'19:00',available:true,staffIds:[]}]};}
export async function getPublicPersonalVisits(){return [];}
export async function getPublicBusinessPrivacyNotice(){throw new Error('U70 preview: writes and unsupported endpoints are disabled');}
export async function getPublicBookingConfirmation(){throw new Error('U70 preview: writes and unsupported endpoints are disabled');}
export async function bookPublicBooking(){throw new Error('U70 preview: writes and unsupported endpoints are disabled');}
export async function bookPublicVisit(){throw new Error('U70 preview: writes and unsupported endpoints are disabled');}
export async function resendBookingConfirmation(){throw new Error('U70 preview: writes and unsupported endpoints are disabled');}
export async function cancelPublicPersonalVisit(){throw new Error('U70 preview: writes and unsupported endpoints are disabled');}
export async function acceptPublicPersonalVisitTimeProposal(){throw new Error('U70 preview: writes and unsupported endpoints are disabled');}
export async function declinePublicPersonalVisitTimeProposal(){throw new Error('U70 preview: writes and unsupported endpoints are disabled');}
export async function createPersonalBookingLink(){throw new Error('U70 preview: writes and unsupported endpoints are disabled');}
export async function getBookingTimeProposal(){throw new Error('U70 preview: writes and unsupported endpoints are disabled');}
export async function acceptBookingTimeProposal(){throw new Error('U70 preview: writes and unsupported endpoints are disabled');}
export async function declineBookingTimeProposal(){throw new Error('U70 preview: writes and unsupported endpoints are disabled');}
export async function confirmBookingEmail(){throw new Error('U70 preview: writes and unsupported endpoints are disabled');}
export async function getPublicRequestStatus(){throw new Error('U70 preview: writes and unsupported endpoints are disabled');}
export async function getPublicOrderStatus(){throw new Error('U70 preview: writes and unsupported endpoints are disabled');}
