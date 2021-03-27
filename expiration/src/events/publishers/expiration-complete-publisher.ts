import {
  Publisher,
  ExpirationCompleteEvent,
  Subjects,
} from '@ss58tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
