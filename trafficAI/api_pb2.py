# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: api.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\tapi.proto\x12\nhelloworld\"\x1c\n\x0cHelloRequest\x12\x0c\n\x04name\x18\x01 \x01(\t\"\x1d\n\nHelloReply\x12\x0f\n\x07message\x18\x01 \x01(\t\"\x1d\n\x0cImageRequest\x12\r\n\x05image\x18\x01 \x01(\x0c\"\x1d\n\nImageReply\x12\x0f\n\x07message\x18\x01 \x01(\t\"\x1d\n\x0cVideoRequest\x12\r\n\x05video\x18\x01 \x01(\x0c\"\x1d\n\nVideoReply\x12\x0f\n\x07message\x18\x01 \x01(\t2\xcb\x01\n\x07Greeter\x12>\n\x08SayHello\x12\x18.helloworld.HelloRequest\x1a\x16.helloworld.HelloReply\"\x00\x12?\n\tSendImage\x12\x18.helloworld.ImageRequest\x1a\x16.helloworld.ImageReply\"\x00\x12?\n\tSendVideo\x12\x18.helloworld.VideoRequest\x1a\x16.helloworld.VideoReply\"\x00\x62\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'api_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _HELLOREQUEST._serialized_start=25
  _HELLOREQUEST._serialized_end=53
  _HELLOREPLY._serialized_start=55
  _HELLOREPLY._serialized_end=84
  _IMAGEREQUEST._serialized_start=86
  _IMAGEREQUEST._serialized_end=115
  _IMAGEREPLY._serialized_start=117
  _IMAGEREPLY._serialized_end=146
  _VIDEOREQUEST._serialized_start=148
  _VIDEOREQUEST._serialized_end=177
  _VIDEOREPLY._serialized_start=179
  _VIDEOREPLY._serialized_end=208
  _GREETER._serialized_start=211
  _GREETER._serialized_end=414
# @@protoc_insertion_point(module_scope)
