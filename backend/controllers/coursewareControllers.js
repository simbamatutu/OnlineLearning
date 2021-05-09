import express from 'express';
import asyncHandler from 'express-async-handler';
import Course from '../models/courseModel.js';
import Courseware from '../models/coursewareModel.js';
import Subtopic from '../models/SubtopicModel.js';
// @desc create new course
// @route POST /api/courses
// @access private teacher/admin
const createCourseware = asyncHandler(async (req, res) => {
  const courseware = new Courseware({
    topicName: 'Sample Topic name',
    course: req.params.id,
  });
  const createdCourseware = await courseware.save();

  res.status(201).json(createdCourseware);
});

// @desc Fetch app course
// @route GET /api/courses:id
// @access public
const getCoursewares = asyncHandler(async (req, res) => {
  const coursewares = await Courseware.find({
    course: req.params.id,
  }).populate({ path: 'subTopics', model: Subtopic });

  if (coursewares) {
    res.json(coursewares);
  } else {
    res.status(400);
    throw new Error('Course has no coursewares yet');
  }
});

// @desc update courseware
// @route PUT /api/courseare/:id
// @access private teacher/admin
const updateCourseware = asyncHandler(async (req, res) => {
  const { topic } = await req.body;
  const courseware = await Courseware.findById(req.params.id);

  if (courseware) {
    courseware.topicName = topic;
    const updatedCourseware = await courseware.save();
    res.json(courseware);
  } else {
    res.status(404);
    throw new Error('Courseware not found!');
  }
});

// @desc create new course
// @route POST /api/courses
// @access private teacher/admin
const createSubtopic = asyncHandler(async (req, res) => {
  const subTopic = new Subtopic({
    subTopicTitle: 'Sample subTopic',
    courseware: req.params.id,
  });
  const createdSubtopic = await subTopic.save();
  res.status(201).json(subTopic);
  const courseware = await Courseware.findOne({ _id: req.params.id });
  if (courseware) {
    courseware.subTopics.push(createdSubtopic);
    const newsubtopic = await courseware.save();
    res.status(201).json(courseware);
  } else {
    res.status(400);
    throw new Error('Topic could not be found!');
  }
});

// @desc update courseware
// @route PUT /api/courseare/:id
// @access private teacher/admin
const updateSubTopic = asyncHandler(async (req, res) => {
  const { subTopicTitle, embedded } = await req.body;
  const subtopic = await Subtopic.findById(req.params.id);

  if (subtopic) {
    subtopic.subTopicTitle = subTopicTitle;
    subtopic.embbedVideo = embedded;

    const updatedSubtopic = await subtopic.save();
    res.json(subtopic);
  } else {
    res.status(404);
    throw new Error('Subtopic not found!');
  }
});

// @desc Fetch app course
// @route GET /api/courses:id
// @access public
const getSubTopic = asyncHandler(async (req, res) => {
  const subTopics = await Subtopic.find();

  //PETRA error 400

  res.json(subTopics);
});

// @desc Fetch section
// @route GET /api/subtopic:id
// @access public
const getSectionById = asyncHandler(async (req, res) => {
  const section = await Subtopic.findById(req.params.id);

  if (section) {
    res.json(section);
  } else {
    res.status(404);
    throw new Error('Section  not found');
  }

  res.json(section);
});

export {
  getSectionById,
  createSubtopic,
  getSubTopic,
  updateSubTopic,
  createCourseware,
  getCoursewares,
  updateCourseware,
};
