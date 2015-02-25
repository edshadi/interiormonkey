use Rack::Static,
  :urls => ["/images", "/assets/css", "/assets/fonts", "/assets/js", "/assets/img", "/assets/third"],
  :root => "public"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
