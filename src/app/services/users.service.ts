import { Injectable } from '@angular/core';
import { User } from '../models';

@Injectable()
export class UsersService {

  private users: User[] = [
    { name: 'John Doe', username: 'johndoe', email: 'johndoe@example.com', phone: '1234567890', website: 'johndoe.com' },
    { name: 'Jane Smith', username: 'janesmith', email: 'janesmith@example.com', phone: '0987654321', website: 'janesmith.com' },
    { name: 'Alice Johnson', username: 'alicejohnson', email: 'alicejohnson@example.com', phone: '9876543210', website: 'alicejohnson.com' },
    { name: 'Bob Williams', username: 'bobwilliams', email: 'bobwilliams@example.com', phone: '0123456789', website: 'bobwilliams.com' },
    { name: 'Sarah Davis', username: 'sarahdavis', email: 'sarahdavis@example.com', phone: '6789012345', website: 'sarahdavis.com' },
    { name: 'Michael Brown', username: 'michaelbrown', email: 'michaelbrown@example.com', phone: '5432109876', website: 'michaelbrown.com' },
    { name: 'Emily Wilson', username: 'emilywilson', email: 'emilywilson@example.com', phone: '8901234567', website: 'emilywilson.com' },
    { name: 'David Taylor', username: 'davidtaylor', email: 'davidtaylor@example.com', phone: '4567890123', website: 'davidtaylor.com' },
    { name: 'Olivia Anderson', username: 'oliviaanderson', email: 'oliviaanderson@example.com', phone: '2345678901', website: 'oliviaanderson.com' },
    { name: 'James Martin', username: 'jamesmartin', email: 'jamesmartin@example.com', phone: '9012345678', website: 'jamesmartin.com' }
  ];

  constructor() { }


  getUsers(): User[] {
    return this.users;
  }
}


