import { NextApiRequest, NextApiResponse } from 'next';

import { Subscriber } from '@/types/types';
import { SUBSCRIBERS } from './database/subscribers-data';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(SUBSCRIBERS);
      break;
    case 'POST':
      const { email, storeId } = req.body;
      if (SUBSCRIBERS.find((subscriber) => subscriber.email === email)) {
        res.status(400).json({ message: 'You have already subscribed' });
        return;
      }
      const newSubscriber: Subscriber = { id: SUBSCRIBERS.length + 1, email, storeId };
      SUBSCRIBERS.push(newSubscriber);
      res.status(201).json(newSubscriber);
      break;
    case 'DELETE':
      const { email: deleteEmail } = req.body;
      if (!deleteEmail) {
        res.status(400).json({ message: 'Please provide email' });
        return;
      }
      const index = SUBSCRIBERS.findIndex((subscriber) => subscriber.email === deleteEmail);
      if (index !== -1) {
        SUBSCRIBERS.splice(index, 1);
        res.status(200).json({ message: 'Subscriber deleted' });
      } else {
        res.status(404).json({ message: 'Subscriber not found' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
