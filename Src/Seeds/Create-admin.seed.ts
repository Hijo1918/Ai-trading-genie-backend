import { DataSource } from 'typeorm';
import { User } from '../users/user.entity';
import * as bcrypt from 'bcryptjs';

// Admin credentials
const ADMIN_EMAIL = 'aitradinggenie@my.com';
const ADMIN_PASSWORD = 'Chummyjojozeal!!';

export const createAdminSeed = async (dataSource: DataSource) => {
  const userRepo = dataSource.getRepository(User);
  const existing = await userRepo.findOneBy({ email: ADMIN_EMAIL });
  if (existing) {
    console.log('Admin user already exists.');
    return;
  }
  const hashed = await bcrypt.hash(ADMIN_PASSWORD, 10);
  const admin = userRepo.create({
    email: ADMIN_EMAIL,
    password: hashed,
    role: 'admin',
  });
  await userRepo.save(admin);
  console.log('Admin user created:', ADMIN_EMAIL);
};

if (require.main === module) {
  import('../data-source').then(({ AppDataSource }) => {
    AppDataSource.initialize()
      .then(() => createAdminSeed(AppDataSource))
      .then(() => process.exit(0))
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
  });
}
