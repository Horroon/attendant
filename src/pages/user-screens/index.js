import React from 'react';
import {UserCard} from './user-card/index';

export const UserScreen = ({role})=> role==='user' && <div>
<UserCard />
</div>