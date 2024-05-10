import EmailProvider from 'next-auth/providers/email';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import config from '@/config';
import connectMongo from './mongo';

export const authOptions = {
    // Set any random key in .env.local
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        ...(connectMongo
            ? [
                  EmailProvider({
                      server: process.env.EMAIL_SERVER,
                      from: config.mailgun.fromNoReply
                  })
              ]
            : [])
    ],

    ...(connectMongo && { adapter: MongoDBAdapter(connectMongo) }),

    callbacks: {
        session: async ({ session, token }) => {
            if (session?.user) {
                session.user.id = token.sub;
            }
            return session;
        }
    },
    session: {
        strategy: 'jwt'
    },
    theme: {
        brandColor: config.colors.main
    }
};
