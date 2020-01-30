class SelectorController < ApplicationController
  require 'json'
  require 'open-uri'
  def index
    # @json = JSON.parse(JSON.load(open("https://tcgbusfs.blob.core.windows.net/blobbus/GetStopLocation.gz")))
    # @j = JSON.parse("{\"id\":123,\"name\":\"foobar\"}")
  end
end
