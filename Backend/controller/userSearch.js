import User from '../Models/userModels.js';
import Conversation from '../Models/conversationModels.js';

// Controller 1: Search Users by Username or Fullname
export const getUserBySearch = async (req, res) => {
  try {
    const search = req.query.search || '';
    const currentUserId = req.user._id;

    const users = await User.find({
      $and: [
        {
          $or: [
            { username: { $regex: '.*' + search + '.*', $options: 'i' } },
            { fullname: { $regex: '.*' + search + '.*', $options: 'i' } },
          ],
        },
        { _id: { $ne: currentUserId } },
      ],
    }).select('-password -email');

    const usersWithLastSeen = users.map((u) => ({
      _id: u._id,
      username: u.username,
      profile_pic: u.profile_pic,
      lastSeen: u.lastSeen,
    }));

    res.status(200).json(usersWithLastSeen);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error });
  }
};

// Controller 2: Get Chat Partners (current chatters)
export const getCurrentChatters = async (req, res) => {
  try {
    const currentUserId = req.user._id;

    const currentChatters = await Conversation.find({
      participants: currentUserId,
    }).sort({ updatedAt: -1 });

    if (!currentChatters || currentChatters.length === 0) {
      return res.status(200).json([]);
    }

    // Get all participant IDs excluding the current user
    const participantsIds = currentChatters.reduce((ids, conversation) => {
      const otherParticipants = conversation.participants.filter(
        (id) => id.toString() !== currentUserId.toString()
      );
      return [...ids, ...otherParticipants];
    }, []);

    const uniqueIds = [...new Set(participantsIds.map((id) => id.toString()))];

    const users = await User.find({
      _id: { $in: uniqueIds },
    }).select('-password -email');

    const usersWithLastSeen = uniqueIds.map((id) => {
      const u = users.find((user) => user._id.toString() === id);
      return {
        _id: u._id,
        username: u.username,
        profile_pic: u.profile_pic,
        lastSeen: u.lastSeen,
      };
    });

    res.status(200).json(usersWithLastSeen);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error });
  }
};
