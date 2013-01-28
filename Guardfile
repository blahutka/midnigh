interactor :simple

group :design do
  guard 'livereload', :port => '35729' do
    watch(%r{app/views/.+\.(erb|haml|slim|rb)})
    watch(%r{app/helpers/.+\.rb})
    watch(%r{app/controllers/.+\.rb})
    watch(%r{public/.+\.(css|js|html)})
    watch(%r{config/locales/.+\.yml})
    # Rails Assets Pipeline
    watch(%r{(app|vendor)/assets/\w+/(.+\.(css|js|html|scss|less)).*}) { |m| "/assets/#{m[2]}" }
  end
  #guard 'less', :all_on_start => true, :all_after_change => true, :output => 'public/stylesheets' do
  #  watch(%r{^.*\.less$})
  #end
end
