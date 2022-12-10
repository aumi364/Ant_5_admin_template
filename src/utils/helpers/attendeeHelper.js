export const attendeeKey = 'attendee_user';
export const nonAttendeeKey = 'attendee_non_user';
export const attendeeMergeHelper = (attendable_user, attendeable_non_user) => {
  const new_attendable_user = attendable_user?.map(user => ({
    ...user,
    type: attendeeKey,
  }));
  const new_attendable_non_user = attendeable_non_user?.map(user => ({
    ...user,
    type: nonAttendeeKey,
  }));

  return new_attendable_user?.concat(new_attendable_non_user);
};

export const attendeeUnmergeHelper = data => {
  const attendee_user = data
    ?.filter(user => user?.type === attendeeKey)
    .map(d => d?.id);
  const attendee_non_user = data
    ?.filter(user => user?.type !== attendeeKey)
    ?.map(d => d?.id);
  return { attendee_user, attendee_non_user };
};
